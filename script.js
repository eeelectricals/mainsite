document.addEventListener("DOMContentLoaded", function() {
    const priceSortDropdown = document.getElementById("price-sort");
    const brandFilterDropdown = document.getElementById("brand-filter");
    const minPriceInput = document.getElementById("min-price");
    const maxPriceInput = document.getElementById("max-price");
    const categoryFilterDropdown = document.getElementById("category-filter");
    const productItems = document.querySelectorAll(".product-item");

    function filterProducts() {
        const selectedSortOption = priceSortDropdown.value;
        const selectedBrands = Array.from(brandFilterDropdown.selectedOptions).map(option => option.value);
        const minPrice = parseFloat(minPriceInput.value) || Number.NEGATIVE_INFINITY;
        const maxPrice = parseFloat(maxPriceInput.value) || Number.POSITIVE_INFINITY;
        const selectedCategory = categoryFilterDropdown.value;

        productItems.forEach(item => {
            const itemBrand = item.querySelector(".product-brand").innerText;
            const itemPrice = parseFloat(item.querySelector(".product-price").innerText.replace("$", ""));
            const itemCategory = item.querySelector(".product-type").value;

            const isVisible =
                (selectedBrands.length === 0 || selectedBrands.includes(itemBrand)) &&
                itemPrice >= minPrice && itemPrice <= maxPrice &&
                (selectedCategory === "all" || selectedCategory === itemCategory);

            item.style.display = isVisible ? "block" : "none";
        });
    }

    priceSortDropdown.addEventListener("change", filterProducts);
    brandFilterDropdown.addEventListener("change", filterProducts);
    minPriceInput.addEventListener("input", filterProducts);
    maxPriceInput.addEventListener("input", filterProducts);
    categoryFilterDropdown.addEventListener("change", filterProducts);

    filterProducts();
});
