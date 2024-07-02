// app/javascript/controllers/zipcode_controller.js
import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
    connect() {
        this.element.addEventListener('input', this.validateZipCode.bind(this));
    }

    validateZipCode(event) {
        const zipCode = event.target.value.trim();
        if (zipCode.length === 8) {
            this.fetchZipCodeData(zipCode);
        }
    }

    fetchZipCodeData(zipCode) {
        fetch(`/validate_zip_code?zip_code=${zipCode}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to validate CEP');
                }
                return response.json();
            })
            .then(data => this.populateAddressFields(data.address))
            .catch(error => console.error('Error:', error));
    }

    populateAddressFields(address) {
        const addressFields = {
            name: 'logradouro',
            number: 'number',
            complement: 'complemento',
            neighborhood: 'bairro',
            city: 'localidade',
            estate: 'uf',
            country: 'pais'
        };
        for (const field in addressFields) {
            const fieldValue = address[addressFields[field]];
            const fieldElement = document.getElementById(`address_${field}`);
            if (fieldElement) {
                fieldElement.value = fieldValue || '';
            }
        }

        const countryElement = document.getElementById('address_country');
        if (countryElement) {
            countryElement.value = 'Brasil';
        }
    }
}
