import { useDispatch, useSelector } from "react-redux";
import {
	setEmail,
	setFullName,
	setGithub,
	setImage,
	setImageError,
	setImagePreview,
	submitted,
} from "./Slice";
import { useRef } from "react";

function Input() {
	const dispatch = useDispatch();
	const maxLength = 20;
	const fullName = useSelector((state) => state.ticket.fullName);
	const email = useSelector((state) => state.ticket.email);
	const github = useSelector((state) => state.ticket.github);
	const imagePreview = useSelector((state) => state.ticket.imagePreview);
	const emailError = useSelector((state) => state.ticket.emailError);
	const githubError = useSelector((state) => state.ticket.githubError);
	const imageError = useSelector((state) => state.ticket.imageError);

	const fileInputRef = useRef(null);

	const handleFileChange = (e) => {
		const file = e.target.files[0];
		if (file) {
			if (file.size > 500 * 1024) {
				// 500KB = 500 * 1024 bytes
				dispatch(
					setImageError(
						"File size exceeds 500KB. Please choose a smaller image."
					)
				);
				return; // Do not proceed if file is too large
			}

			dispatch(setImageError(""));
			dispatch(setImagePreview(URL.createObjectURL(file)));
			dispatch(setImage(URL.createObjectURL(file)));
		}
	};

	function remove(e) {
		e.preventDefault();
		dispatch(setImage());

		// Reset the file input so the same file can be selected again
		if (fileInputRef.current) {
			fileInputRef.current.value = ""; // Clear the input value
		}

		dispatch(setImagePreview(null));
	}

	function handleSubmit(e) {
		e.preventDefault();
		dispatch(submitted());
	}

	return (
		<form className="max-w-md p-3 mx-auto">
			{/* File Input */}
			<div className="mb-3">
				<p className="mb-2 text-lg font-medium text-slate-300">Upload Avatar</p>
				<div className="flex flex-col items-center justify-center p-5 space-y-4 border-2 border-dashed rounded-lg border-slate-500">
					{imagePreview ? (
						<>
							<img
								src={imagePreview}
								alt="Avatar Preview"
								className="w-20 h-20 rounded-full"
							/>
							<button
								onClick={remove}
								className="mt-2 text-red-500 transition-all duration-200 ease-in-out hover:text-red-800"
							>
								Remove Image
							</button>
						</>
					) : (
						<>
							<input
								type="file"
								ref={fileInputRef}
								className="hidden" // Hide the file input
								onChange={handleFileChange}
							/>
							<button
								type="button"
								onClick={() => fileInputRef.current.click()} // Trigger the file input click
								// className="font-medium text-gray-500 text-md sm:text-lg"
							>
								<label class="border border-gray-800 rounded-lg w-14 h-14 flex justify-center items-center bg-slate-700 hover:bg-slate-300 cursor-pointer transition-all duration-200 ease-in-out">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="30"
										height="30"
										fill="none"
										viewBox="0 0 30 30"
									>
										<path
											fill="#F57463"
											fill-rule="evenodd"
											d="M21.894 11.252a.264.264 0 0 1-.229-.225c-.368-2.634-2.51-5.924-6.663-5.924-4.465 0-6.3 3.636-6.657 5.928a.264.264 0 0 1-.228.22c-2.95.362-4.945 2.622-4.945 5.729a5.802 5.802 0 0 0 3.423 5.277 6.274 6.274 0 0 0 2.305.468h2.528a.45.45 0 0 0 .45-.45c0-.267-.233-.472-.5-.484a3.077 3.077 0 0 1-2.049-.9 3.123 3.123 0 0 1 0-4.418l3.461-3.462c.147-.146.307-.277.479-.392.076-.05.158-.085.236-.129.1-.054.196-.114.301-.158.1-.04.206-.065.308-.096.092-.027.181-.062.276-.081.191-.039.384-.056.578-.059.011 0 .022-.004.034-.004.01 0 .018.003.027.004.196.002.391.02.584.059.094.019.18.053.271.08.105.031.211.055.313.098.1.042.193.098.288.15.084.046.17.083.25.137.154.103.295.221.428.349.016.014.034.024.049.039l3.463 3.463a3.124 3.124 0 0 1 0 4.42c-.558.56-1.284.86-2.05.897-.266.013-.497.219-.497.486 0 .249.202.451.451.451h2.512c.435 0 1.314-.06 2.344-.473a5.794 5.794 0 0 0 3.394-5.272c0-3.104-1.991-5.363-4.935-5.728Z"
											clip-rule="evenodd"
										/>
										<path
											fill="#F57463"
											fill-rule="evenodd"
											d="M18.464 19.62a.936.936 0 0 0 .663-1.6l-3.464-3.464a.938.938 0 0 0-.664-.275l-.014.002a.932.932 0 0 0-.65.274l-3.462 3.462a.936.936 0 1 0 1.326 1.325l1.864-1.862v6.479a.937.937 0 1 0 1.875 0v-6.48l1.864 1.863a.93.93 0 0 0 .662.275Z"
											clip-rule="evenodd"
										/>
									</svg>
								</label>
							</button>
							<p className="font-medium text-gray-500 text-md sm:text-lg">
								Click to Select an Image
							</p>
						</>
					)}
				</div>
				<input
					type="file"
					id="fileUpload"
					accept="image/*"
					className="hidden"
					onChange={handleFileChange}
				/>
			</div>

			<div className="flex items-start gap-2 mb-6">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="none"
					viewBox="0 0 16 16"
				>
					<path
						stroke="#D1D0D5"
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M2 8a6 6 0 1 0 12 0A6 6 0 0 0 2 8Z"
					/>
					<path fill="#D1D0D5" d="M8.004 10.462V7.596ZM8 5.57v-.042Z" />
					<path
						stroke="#D1D0D5"
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M8.004 10.462V7.596M8 5.569v-.042"
					/>
				</svg>

				{!imageError && (
					<p className="text-xs font-medium text-slate-300">
						Upload your photo (JPG or PNG, max size: 500KB).
					</p>
				)}

				{imageError && (
					<p className="mb-4 text-xs text-red-500">{imageError}</p>
				)}
			</div>

			{/* Other Input Fields */}
			<div className="mb-4">
				<label
					htmlFor="name"
					className="block mb-2 text-lg font-medium text-slate-300"
				>
					Full Name
				</label>
				<input
					type="text"
					id="name"
					placeholder={`Enter up to ${maxLength} characters`}
					maxLength={maxLength} // Limits the input length
					className="block w-full text-gray-100 border border-white bg-purple-950 rounded-xl p-3.5 mb-5 focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 ease-in-out"
					value={fullName}
					onChange={(e) => dispatch(setFullName(e.target.value))}
				/>

				<label
					htmlFor="name"
					className="block mb-2 text-lg font-medium text-slate-300"
				>
					Email Address
				</label>
				<input
					type="text"
					id="name"
					className="block w-full text-gray-100 border border-white bg-purple-950 rounded-xl p-3.5 mb-5 focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 ease-in-out"
					placeholder="example@email.com"
					value={email}
					onChange={(e) => dispatch(setEmail(e.target.value))}
				/>
				{emailError && (
					<p className="mb-4 text-sm text-red-500">{emailError}</p>
				)}

				<label
					htmlFor="name"
					className="block mb-2 text-lg font-medium text-slate-300"
				>
					GitHub Username
				</label>
				<input
					type="text"
					id="name"
					className="block w-full text-gray-100 border border-white bg-purple-950 rounded-xl p-3.5 mb-5 focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 ease-in-out"
					placeholder="@yourusername"
					maxLength={maxLength} // Limits the input length
					value={github}
					onChange={(e) => dispatch(setGithub(e.target.value))}
				/>
				{githubError && (
					<p className="mb-4 text-sm text-red-500">{githubError}</p>
				)}
			</div>

			{/* Submit Button */}
			<button
				type="submit"
				className="w-full px-4 py-3 text-lg font-bold transform transition-all duration-300 ease-in-out hover:scale-105 hover:translate-y-[-3px] bg-orange-600 text-purple-950 rounded-2xl hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
				onClick={handleSubmit}
				disabled={emailError || githubError || imageError ? true : false}
			>
				Generate My Ticket
			</button>
		</form>
	);
}

export default Input;
