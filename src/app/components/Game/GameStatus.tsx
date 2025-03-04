// GameStatus.tsx
import React from 'react';
import Image from 'next/image';
import EmojiGuesses from './EmojiGuesses';
import { Attribute } from '@/types';

interface GameStatusProps {
	gameOver: boolean;
	gameWon: boolean;
	targetCharacter?: { name: string }; //  Made optional and added a type
	guesses: Attribute[][];
	MAX_GUESSES: number;
}

const GameStatus: React.FC<GameStatusProps> = ({
	gameOver,
	gameWon,
	targetCharacter,
	guesses,
	MAX_GUESSES,
}) => {
	const tries_grammar = `${guesses.length} ${guesses.length === 1 ? 'time' : 'times'}`;
	return (
			<div className="text-center flex flex-col">
				{gameOver ? (
					<div>
						<h2 className="text-2xl font-bold">
							{gameWon ? 'Congratulations! You won!' : 'Game Over! You lost!'}
						</h2>
						<p className="text-lg">The character was {targetCharacter?.name}.</p>
						<p className="text-lg">You tried {tries_grammar}.</p>
					</div>
				) : (
					<div>
						<h2 className="text-2xl font-bold">Path to Nowordle</h2>
						{guesses.length === 0 ? (
							<>
								<p className="text-lg mb-2">
									Try to find the daily Sinner based on their characteristics.
								</p>
								<Image
									src="/images/placeholder.png"
									alt="Selected Character"
									width={256}
									height={576}
									className="object-cover h-full rounded-full mx-auto mb-2"
									unoptimized={true}
								/>
							</>
						) : (
							<>
								<p className="text-lg">
									Guess {guesses.length}/{MAX_GUESSES}.
								</p>
							</>
						)}
					</div>
				)}
				<div className="my-4">
					<EmojiGuesses
						guesses={guesses}
						gameOver={gameOver}
					/>
				</div>
			</div>
	);
};

export default GameStatus;