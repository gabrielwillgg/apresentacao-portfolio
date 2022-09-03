const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");
const accordionItem = document.getElementsByClassName("accordion-item");

accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener("click", event => {
    accordionItemHeader.classList.toggle("active");
    accordionItemHeader.parentNode.className = 'accordion-item active';
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if(accordionItemHeader.classList.contains("active")) {
      accordionItemBody.className = "accordion-item-body open";
    }
    else {
      accordionItemBody.className = "accordion-item-body";
      accordionItemHeader.parentNode.className = 'accordion-item';
    }
    
  });
});