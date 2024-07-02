import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    connect() {
        const litepickerRangePlugin = document.getElementById('litepickerRangePlugin');
        if (litepickerRangePlugin) {
            new Litepicker({
                element: litepickerRangePlugin
            });
        }
    }
}
