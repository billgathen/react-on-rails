class ColorPickerController < ApplicationController
  def index
    @colors = [ 'White', 'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet' ]
    @default_color = 'White'
  end
end
