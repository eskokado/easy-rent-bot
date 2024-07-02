import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    connect() {
        const datatablesSimple = document.getElementById('datatablesSimple');
        if (datatablesSimple) {
            new simpleDatatables.DataTable(datatablesSimple);
        }
    }
}
