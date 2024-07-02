import { Controller } from "@hotwired/stimulus"
import flatpickr from "flatpickr"

// Connects to data-controller="flatpickr"
export default class extends Controller {
  connect() {
    flatpickr(".fp_date_br", {
          dateFormat: "d/m/Y",
        }
    );
  }
}
