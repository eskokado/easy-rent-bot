# frozen_string_literal: true
module Backoffice
  class CustomersController < BackofficeController
    before_action :set_customer, only: %i[show edit update destroy]

    def index
      @customers = Customer.all
    end

    def show; end

    def new
      @customer = Customer.new
    end

    def create
      @customer = Customer.new(customer_params)
      respond_to do |format|
        if @customer.save
          format.html do
            redirect_to @customer, notice: 'Customer was successfully created.'
          end
        else
          format.html do
            render :new, notice: 'Customer not created.', status: :unprocessable_entity
          end
        end
      end
    end

    def edit; end

    def update
      respond_to do |format|
        if @customer.update(customer_params)
          format.html do
            redirect_to customer_path(@customer), notice: 'Customer was successfully updated.'
          end
        else
          format.html do
            render :edit, notice: 'Customer not updated.', status: :unprocessable_entity
          end
        end
      end
    end

    def destroy
      @customer.destroy
      respond_to do |format|
        format.html do
          redirect_to customers_path, notice: 'Customer was successfully deleted.'
        end
      end
    end

    private

    def set_customer
      @customer = Customer.find(params[:id])
    end

    def customer_params
      params.require(:customer).permit(:name, :dob, :email, :mobile)
    end
  end
end
