import { Controller } from "@hotwired/stimulus"
import "trix"
import "@rails/actiontext"

export default class TrixController extends Controller {
    // inside the class
    // ************** remove buttons code ********************
    static UNUSED_TOOLBAR_CLASSES = [
        ".trix-button--icon-strike",
        ".trix-button--icon-link",
        ".trix-button-group--block-tools",
        ".trix-button-group--file-tools",
        ".trix-button-group--history-tools"
    ];

    connect() {
        // wait for the trix editor is attached to the DOM to do stuff
        addEventListener("trix-initialize", function (event) {
            console.log("im inititalized!");
            // ...
            // ******** add underline code *************
            // initialize underline attribute
            // Verificar se o botão já existe antes de adicioná-lo
            if (!document.querySelector(".trix-button--icon-underline")) {
                // initialize underline attribute
                Trix.config.textAttributes.underline = {
                    tagName: "u",
                    style: { textDecoration: "underline" },
                    inheritable: true,
                    parser: function (element) {
                        var style = window.getComputedStyle(element);
                        return style.textDecoration === "underline";
                    },
                };

                // create underline button
                let underlineEl = document.createElement("button");
                underlineEl.setAttribute("type", "button");
                underlineEl.setAttribute("data-trix-attribute", "underline");
                underlineEl.setAttribute("data-trix-key", "u");
                underlineEl.setAttribute("tabindex", -1);
                underlineEl.setAttribute("title", "underline");
                underlineEl.classList.add("trix-button", "trix-button--icon-underline");
                underlineEl.innerHTML = "U";

                // add button to toolbar - inside the text tools group
                document.querySelector(".trix-button-group--text-tools").appendChild(underlineEl);
            }
            // ************** remove buttons code ********************
            // inside the 'trix-initialize' event listener
            TrixController.UNUSED_TOOLBAR_CLASSES.forEach((cls) => {
                document.querySelector(cls).remove();
            });

            // add custom icons code here
            // ...
        }, true);

        // remove file upload handling
        addEventListener("trix-file-accept", function (event) {
            event.preventDefault();
        }, true);
    }
}
