document.addEventListener("DOMContentLoaded", () => {
  // toggling restaurants

  const toggleLi = (e) => {
    const li = e.target;
    if (li.className === "visited") {
      li.className = "";
    } else {
      li.className = "visited";
    }
  };

  document.querySelectorAll("#restaurants li").forEach((li) => {
    li.addEventListener("click", toggleLi);
  });



  // adding SF places as list items

  // --- your code here!
  const handleSubmit = (e) => {
      e.preventDefault();

      const favoriteInput = document.querySelector(".favorite-input");
      const favorite = favoriteInput.value;
      favoriteInput.value = "";

      const newLi = document.createElement("li");
      newLi.textContent = favorite;

      const favoriteList = document.getElementById("#sf-places");
      favoriteList.appendChild(newLi);
  };

  const listSubmitButton = document.querySelector(".favorite-submit");
  listSubmitButton.addEventListener("click", handleSubmit);


  // adding new photos

  // --- your code here!
  const handleToggle = (e) => {
    e.preventDefault();

    const queryForm = document.querySelector(".photo-form-container");

    if (queryForm.classList.contains("hidden")) {
      queryForm.classList.remove("hidden");
    } else {
      queryForm.classList.add("hidden");
    }
  };

  const toggleShowButton = document.querySelector(".photo-show-button");
  toggleShowButton.addEventListener("click", handleToggle);

  const handleImageSubmit = (e) => {
    e.preventDefault();

    const urlInput = document.querySelector(".photo-url-input");
    const url = urlInput.value;
    urlInput.value = "";

    const newImage = document.createElement("img");
    newImage.src = url;

    const newLi = document.createElement("li");
    newLi.appened(newImage);
  };

  const imageSubmitButton = document.querySelector(".photo-url-submit");
  imageSubmitButton.addEventListener("click", handleImageSubmit);


});
