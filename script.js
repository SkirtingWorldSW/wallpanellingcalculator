function calculateKits() {
    const KIT_COVERAGE = 2.8;  // Each kit covers 2.8 meters
    const wallLength = parseFloat(document.getElementById('wallLength').value) || 0;
    const kitsRequired = Math.ceil(wallLength / KIT_COVERAGE);
    document.getElementById('kitsRequired').innerText = kitsRequired;
}

// Initial calculation:
calculateKits();
