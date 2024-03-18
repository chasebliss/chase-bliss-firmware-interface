# Programmer

This repository hosts a WebUSB programmer designed for Daisy (and other DFU-compatible chips/boards). The project is largely inspired by the webdfu page set up for STM32F103 boards by devanlai, which you can find [here](https://github.com/devanlai/webdfu).

## Usage

The programmer facilitates flashing user-uploaded binary files or selecting from a pre-compiled list.

To utilize the programmer locally, follow these steps:

1. Clone this repository:
   ```
   git clone git@github.com:chasebliss/chase-bliss-firmware-interface.git
   ```

2. Navigate to the root directory of the cloned repository.

3. Install the `live-server` package globally if you haven't already:
   ```
   npm install -g live-server
   ```

4. Run the `live-server` command to start the server:
   ```
   live-server
   ```

5. Access the local version of the programmer at the URL provided by `live-server`, usually:
   ```
   http://127.0.0.1:8080/
   ```

By following these instructions, you can easily set up and run the WebUSB programmer locally on your machine using `live-server`. Ensure to refer to any additional guidelines provided in the repository's documentation.
