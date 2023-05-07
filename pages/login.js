import React from 'react';
import { auth, provider } from '../firebaseConfig/firebase';

export default function login() {
	const signIn = () => {
		auth.signInWithPopup(provider).catch(alert);
	};
	return (
		<div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
			<div className="sm:mx-auto sm:w-full sm:max-w-md">
				<h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
					Sign in to your account
				</h2>
			</div>

			<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
				<div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
					<div>
						{/* <div className="relative mt-10">
						</div> */}

						<div className="mt-6 grid">
							<button
								type="button"
								onClick={signIn}
								className="flex w-full items-center justify-center rounded-full bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 max-w-lg"
							>
								<svg
									className="h-5 w-5"
									aria-hidden="true"
									fill="currentColor"
									viewBox="0 0 20 20"
								>
									<path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
								</svg>
								<span className="text-sm font-semibold leading-6">
									Google
								</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
