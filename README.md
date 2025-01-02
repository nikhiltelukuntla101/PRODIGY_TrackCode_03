# Tic-Tac-Toe Web Application with AI Opponent

## Description

A simple web-based Tic-Tac-Toe game where you can play against an AI opponent. The AI randomly selects an empty square to place its marker. This game is implemented using **HTML**, **CSS**, and **JavaScript**.

## Features

- **Two-player game**: Play against a human opponent on the same device.
- **AI Opponent**: Play against a simple AI that makes random moves.
- **Win Condition Check**: The game checks for winning combinations and announces the winner.
- **Draw Detection**: If all squares are filled and no one wins, a draw is declared.
- **Responsive Layout**: The game board is designed to be responsive for different screen sizes.
- **Reset Button**: Reset the game at any time to start a new round.

## Technologies Used

- **HTML**: For structuring the game interface.
- **CSS**: For styling the game board and the page layout.
- **JavaScript**: For implementing the game logic and handling player and AI turns.

## How to Play

1. The human player (`X`) plays first.
2. Click on any empty square to place your marker (`X`).
3. After the player’s move, the AI opponent (`O`) will automatically take its turn by selecting a random empty square.
4. The game continues until a player wins by placing three markers in a row (horizontally, vertically, or diagonally) or a draw occurs when the board is full.
5. Press the **"Reset Game"** button to restart the game at any time.

## Game Logic

- **Winning Conditions**: A player wins if they align three of their markers in a row. This could be horizontal, vertical, or diagonal.
- **AI Logic**: The AI makes random moves, placing its marker (`O`) in any available empty square.

## Installation

1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/your-username/tic-tac-toe-ai.git
   ```
