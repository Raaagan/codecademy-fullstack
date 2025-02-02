# Kelvin Weather

## Usage

The Kelvin Weather application is a simple JavaScript program that converts a temperature in Kelvin to Celsius, Fahrenheit, and Newton scales. The program is designed to be run in a web browser, with the results displayed in the browser console.

To use the application, follow these steps:

1. Open the `index.html` file in a web browser.
2. Open the browser console to view the temperature conversions.

The application will output the following information:

```
The temperature is 293 degrees Kelvin.
The temperature is 20 degrees Celsius.
The temperature is 68 degrees Fahrenheit.
The temperature is 6 degrees Newton.
```

## API

The Kelvin Weather application provides the following API:

- `kelvin`: The temperature in Kelvin, which is set to `293` in the provided code.
- `celsius`: The temperature in Celsius, calculated by subtracting `273` from the Kelvin temperature.
- `farenheit`: The temperature in Fahrenheit, calculated by converting the Celsius temperature using the formula `(celsius * (9 / 5)) + 32`.
- `newton`: The temperature in the Newton scale, calculated by converting the Celsius temperature using the formula `celsius * (33 / 100)`.

## License

This project is licensed under the [MIT License](LICENSE).

## Testing

To test the Kelvin Weather application, you can modify the `kelvin` variable in the `app.js` file and observe the changes in the console output.