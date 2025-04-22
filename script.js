function changeText() {
    const heading = document.getElementById("intro-heading");
    const paragraph = document.getElementById("intro-paragraph");
    heading.textContent = "Updated Introduction";
    paragraph.textContent = "The introduction text has been updated dynamically using JavaScript.";
  }

  function changeStyle() {
    const productSection = document.getElementById("product_container");
    productSection.classList.toggle("highlight");
  }
  function AddElement() {
    const benefitsList = document.querySelector("#benefits_container ul");
    if (!document.getElementById("dynamic-benefit")) {
      const newBenefit = document.createElement("li");
      newBenefit.textContent = "Avoidance of data loss.";
      newBenefit.id = "dynamic-benefit";
      benefitsList.appendChild(newBenefit);
    }
  }
  function RemoveElement(){
    const addedBenefit = document.getElementById("dynamic-benefit");
    if (addedBenefit){
      addedBenefit.remove();

    }else{
      alert("No benefit to remove.");
    }
  }