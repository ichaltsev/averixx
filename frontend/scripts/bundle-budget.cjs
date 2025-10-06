const fs = require('fs');
const path = require('path');

// Bundle size budget configuration
const BUDGET_CONFIG = {
  // Maximum file sizes in bytes
  maxFileSize: {
    'static/js': 500 * 1024, // 500KB
    'static/css': 100 * 1024, // 100KB
    'static/media': 2 * 1024 * 1024, // 2MB
  },
  // Maximum total bundle size
  maxTotalSize: 5 * 1024 * 1024, // 5MB
  // Warning thresholds (80% of max)
  warningThreshold: 0.8,
};

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

function analyzeBundleSize() {
  const buildDir = path.join(__dirname, '../build');
  
  if (!fs.existsSync(buildDir)) {
    console.error('❌ Build directory not found. Run "npm run build" first.');
    process.exit(1);
  }

  console.log('📊 Analyzing bundle size...\n');

  let totalSize = 0;
  const fileStats = [];
  const warnings = [];
  const errors = [];

  function analyzeDirectory(dir, relativePath = '') {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const itemPath = path.join(dir, item);
      const itemRelativePath = path.join(relativePath, item);
      const stat = fs.statSync(itemPath);
      
      if (stat.isDirectory()) {
        analyzeDirectory(itemPath, itemRelativePath);
      } else {
        const size = stat.size;
        totalSize += size;
        
        fileStats.push({
          path: itemRelativePath,
          size: size,
          formattedSize: formatBytes(size)
        });

        // Check file size limits
        const fileType = itemRelativePath.split('/')[0];
        const maxSize = BUDGET_CONFIG.maxFileSize[fileType];
        
        if (maxSize && size > maxSize) {
          errors.push({
            type: 'error',
            message: `File ${itemRelativePath} exceeds maximum size: ${formatBytes(size)} > ${formatBytes(maxSize)}`
          });
        } else if (maxSize && size > maxSize * BUDGET_CONFIG.warningThreshold) {
          warnings.push({
            type: 'warning',
            message: `File ${itemRelativePath} is approaching size limit: ${formatBytes(size)} (${Math.round((size / maxSize) * 100)}% of limit)`
          });
        }
      }
    }
  }

  analyzeDirectory(buildDir);

  // Sort files by size (largest first)
  fileStats.sort((a, b) => b.size - a.size);

  // Display results
  console.log('📁 Largest files:');
  fileStats.slice(0, 10).forEach((file, index) => {
    console.log(`  ${index + 1}. ${file.path} - ${file.formattedSize}`);
  });

  console.log(`\n📈 Total bundle size: ${formatBytes(totalSize)}`);

  // Check total size limit
  if (totalSize > BUDGET_CONFIG.maxTotalSize) {
    errors.push({
      type: 'error',
      message: `Total bundle size exceeds limit: ${formatBytes(totalSize)} > ${formatBytes(BUDGET_CONFIG.maxTotalSize)}`
    });
  } else if (totalSize > BUDGET_CONFIG.maxTotalSize * BUDGET_CONFIG.warningThreshold) {
    warnings.push({
      type: 'warning',
      message: `Total bundle size is approaching limit: ${formatBytes(totalSize)} (${Math.round((totalSize / BUDGET_CONFIG.maxTotalSize) * 100)}% of limit)`
    });
  }

  // Display warnings and errors
  if (warnings.length > 0) {
    console.log('\n⚠️  Warnings:');
    warnings.forEach(warning => {
      console.log(`  - ${warning.message}`);
    });
  }

  if (errors.length > 0) {
    console.log('\n❌ Errors:');
    errors.forEach(error => {
      console.log(`  - ${error.message}`);
    });
    console.log('\n💡 Consider:');
    console.log('  - Code splitting and lazy loading');
    console.log('  - Tree shaking unused code');
    console.log('  - Optimizing images and assets');
    console.log('  - Using dynamic imports for large dependencies');
    process.exit(1);
  }

  if (warnings.length === 0 && errors.length === 0) {
    console.log('\n✅ Bundle size is within acceptable limits!');
  }

  // Performance recommendations
  console.log('\n💡 Performance recommendations:');
  console.log('  - Enable gzip compression on your server');
  console.log('  - Use CDN for static assets');
  console.log('  - Implement service worker for caching');
  console.log('  - Consider preloading critical resources');
}

// Run the analysis
analyzeBundleSize();
