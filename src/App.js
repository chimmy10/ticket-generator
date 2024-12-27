import { useSelector } from "react-redux";
import Input from "./Input";
import Success from "./Success";

function App() {
	const fullName = useSelector((state) => state.ticket.fullName);
	const email = useSelector((state) => state.ticket.email);
	const submit = useSelector((state) => state.ticket.submit);

	return (
		<div className="min-h-screen bg-[url('/public/images/background-mobile.png')] bg-cover bg-center px-4">
			<div className="px-5 py-9">
				<div className="pb-8">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 209 30"
						className="mx-auto w-[159px] h-[30px] sm:w-[190px] md:w-[230px]"
					>
						<path
							fill="#F57463"
							d="M0 26.864A8.898 8.898 0 0 0 0 9.069v6.229a2.67 2.67 0 0 1 0 5.339v6.229Z"
						/>
						<path
							fill="#F57463"
							d="M29.661 12.034a15.935 15.935 0 0 0-4.82-.742c-8.805 0-15.943 7.138-15.943 15.943 0 .884.072 1.751.21 2.596h9.907a6.377 6.377 0 0 1 10.647-6.771V12.034ZM1.564.17c.738 6.673 6.396 11.864 13.267 11.864 6.87 0 12.528-5.191 13.266-11.865H18.55a4.006 4.006 0 0 1-7.441 0H1.564Z"
						/>
						<path
							fill="#fff"
							d="M54.474 4.51c1.222 0 2.26.165 3.114.493.861.32 1.649.775 2.363 1.366l-1.982 2.388a5.67 5.67 0 0 0-1.55-.91 4.864 4.864 0 0 0-1.847-.345c-.714 0-1.366.205-1.957.615-.59.402-1.062 1.042-1.415 1.92-.353.87-.53 2.002-.53 3.397 0 2.051.37 3.545 1.108 4.48.747.927 1.703 1.39 2.868 1.39.853 0 1.563-.16 2.13-.48.565-.32 1.086-.668 1.562-1.046l1.834 2.339c-.64.632-1.427 1.173-2.363 1.624-.935.452-2.063.678-3.384.678-1.543 0-2.913-.341-4.111-1.022-1.19-.69-2.125-1.698-2.806-3.028-.673-1.337-1.01-2.982-1.01-4.935 0-1.904.349-3.52 1.047-4.85.705-1.329 1.661-2.338 2.867-3.027 1.206-.698 2.56-1.046 4.062-1.046Zm13.338 3.988c1.345 0 2.49.288 3.434.862.943.574 1.665 1.383 2.166 2.425.5 1.034.75 2.248.75 3.643 0 2.182-.558 3.893-1.674 5.132-1.115 1.239-2.674 1.859-4.676 1.859-2.002 0-3.561-.612-4.677-1.834-1.116-1.223-1.674-2.934-1.674-5.133 0-1.386.25-2.6.75-3.643.51-1.042 1.236-1.854 2.18-2.437.95-.582 2.091-.874 3.42-.874Zm0 2.868c-.796 0-1.387.328-1.773.985-.377.648-.566 1.682-.566 3.101 0 1.444.189 2.49.566 3.139.386.648.977.972 1.773.972.796 0 1.382-.324 1.76-.972.385-.648.578-1.703.578-3.163 0-1.412-.193-2.441-.578-3.09-.378-.648-.965-.972-1.76-.972ZM84.35 3.33l3.889.406V22h-3.446l-.197-1.44c-.361.509-.841.948-1.44 1.317-.6.36-1.325.542-2.179.542-1.083 0-1.981-.292-2.695-.874-.706-.583-1.235-1.395-1.588-2.437-.344-1.05-.517-2.277-.517-3.68 0-1.346.21-2.54.628-3.582.418-1.042 1.017-1.858 1.797-2.45.78-.598 1.706-.898 2.781-.898 1.174 0 2.162.403 2.967 1.207V3.329Zm-1.92 8.012c-.673 0-1.215.32-1.625.96-.41.632-.616 1.683-.616 3.151 0 1.075.087 1.912.259 2.511.172.59.41 1.005.714 1.243.303.238.652.357 1.046.357.435 0 .829-.135 1.181-.406.362-.27.682-.64.96-1.108v-5.637a3.478 3.478 0 0 0-.861-.787 1.963 1.963 0 0 0-1.058-.284Zm14.888-9.255c.673 0 1.223.21 1.65.628.426.418.64.94.64 1.563 0 .624-.214 1.149-.64 1.575-.427.419-.977.628-1.65.628-.68 0-1.239-.21-1.674-.628-.426-.426-.64-.951-.64-1.575s.214-1.145.64-1.563c.435-.419.993-.628 1.674-.628ZM99.67 8.93v10.412h3.323V22H92.075v-2.659h3.705v-7.753h-3.582V8.929h7.471ZM106.447 22V8.93h3.397l.271 1.513c.582-.656 1.198-1.145 1.846-1.465.648-.32 1.386-.48 2.215-.48 1.116 0 1.994.341 2.634 1.022.64.681.96 1.641.96 2.88V22h-3.889v-8.48c0-.804-.09-1.362-.271-1.674-.172-.32-.5-.48-.985-.48-.41 0-.804.131-1.181.394-.369.263-.739.628-1.108 1.095V22h-3.889Zm26.372-15.163.911 2.855c-.46.18-.997.312-1.613.394-.615.082-1.333.123-2.154.123.821.353 1.444.792 1.871 1.317.435.517.652 1.198.652 2.043 0 .845-.225 1.6-.676 2.265-.452.656-1.092 1.173-1.92 1.55-.829.378-1.81.567-2.942.567a7.35 7.35 0 0 1-1.514-.148.756.756 0 0 0-.32.32.909.909 0 0 0-.111.43c0 .206.082.39.247.555.172.164.57.246 1.193.246h2.142c1.017 0 1.895.164 2.634.492.746.328 1.325.776 1.735 1.342.41.566.616 1.214.616 1.944 0 1.338-.587 2.392-1.76 3.163-1.174.772-2.917 1.157-5.231 1.157-1.674 0-2.971-.172-3.889-.517-.911-.336-1.547-.82-1.908-1.452-.353-.623-.529-1.366-.529-2.228h3.446c0 .378.074.686.221.924.156.246.447.426.874.541.435.115 1.063.172 1.883.172.829 0 1.461-.065 1.896-.197.434-.13.73-.311.886-.541a1.23 1.23 0 0 0 .246-.75c0-.387-.152-.698-.455-.936-.304-.238-.784-.357-1.44-.357h-2.08c-1.412 0-2.437-.259-3.077-.776-.64-.525-.96-1.136-.96-1.834 0-.484.127-.943.381-1.378a3.33 3.33 0 0 1 1.096-1.095c-.837-.443-1.436-.964-1.797-1.563-.361-.608-.542-1.334-.542-2.179 0-.984.25-1.83.751-2.535.5-.714 1.19-1.264 2.068-1.65.886-.385 1.895-.578 3.027-.578.977.016 1.826-.05 2.548-.197a9.506 9.506 0 0 0 1.945-.628 22.29 22.29 0 0 0 1.649-.861Zm-6.043 4.21c-.616 0-1.104.196-1.465.59-.361.386-.541.919-.541 1.6 0 .722.184 1.276.553 1.662.37.385.854.578 1.453.578 1.329 0 1.994-.763 1.994-2.29 0-1.427-.665-2.14-1.994-2.14Zm31.057-6.536c1.223 0 2.261.164 3.114.492a8.12 8.12 0 0 1 2.363 1.366l-1.982 2.388a5.658 5.658 0 0 0-1.55-.91 4.865 4.865 0 0 0-1.846-.345c-.714 0-1.367.205-1.957.615-.591.402-1.063 1.042-1.416 1.92-.353.87-.529 2.002-.529 3.397 0 2.051.369 3.545 1.108 4.48.746.927 1.702 1.39 2.867 1.39.854 0 1.563-.16 2.13-.48.566-.32 1.087-.668 1.563-1.046l1.834 2.339c-.64.632-1.428 1.173-2.364 1.624-.935.452-2.063.678-3.384.678-1.543 0-2.913-.341-4.111-1.022-1.19-.69-2.125-1.698-2.806-3.028-.673-1.337-1.009-2.982-1.009-4.935 0-1.904.348-3.52 1.046-4.85.705-1.329 1.661-2.338 2.868-3.027 1.206-.698 2.56-1.046 4.061-1.046Zm13.338 3.987c1.346 0 2.49.288 3.434.862.943.574 1.665 1.383 2.166 2.425.501 1.034.751 2.248.751 3.643 0 2.182-.558 3.893-1.674 5.132-1.116 1.239-2.675 1.859-4.677 1.859s-3.561-.612-4.677-1.834c-1.116-1.223-1.674-2.934-1.674-5.133 0-1.386.25-2.6.751-3.643.509-1.042 1.235-1.854 2.178-2.437.952-.582 2.093-.874 3.422-.874Zm0 2.868c-.796 0-1.387.328-1.772.985-.378.648-.566 1.682-.566 3.101 0 1.444.188 2.49.566 3.139.385.648.976.972 1.772.972s1.383-.324 1.76-.972c.386-.648.578-1.703.578-3.163 0-1.412-.192-2.441-.578-3.09-.377-.648-.964-.972-1.76-.972ZM180.275 22V8.93h3.397l.271 1.513c.582-.656 1.198-1.145 1.846-1.465.648-.32 1.387-.48 2.215-.48 1.116 0 1.994.341 2.634 1.022.64.681.96 1.641.96 2.88V22h-3.889v-8.48c0-.804-.09-1.362-.271-1.674-.172-.32-.5-.48-.984-.48-.411 0-.805.131-1.182.394-.369.263-.738.628-1.108 1.095V22h-3.889Zm23.086-18.67c.951 0 1.793.077 2.523.233.73.148 1.382.345 1.957.59L206.77 6.69a6.816 6.816 0 0 0-1.391-.369 8.32 8.32 0 0 0-1.415-.123c-.772 0-1.325.14-1.662.418-.328.28-.492.743-.492 1.391v1.748h4.258l-.43 2.695h-3.828V22h-3.865v-9.55h-2.744V9.753h2.744V7.858c0-.861.205-1.632.616-2.313.41-.681 1.017-1.219 1.821-1.613.804-.402 1.797-.603 2.979-.603Z"
						/>
					</svg>
				</div>
				{!submit && (
					<div className="max-w-xl mx-auto space-y-3 text-center text-white sm:max-w-lg lg:max-w-2xl">
						<p className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">
							Your Journey to Coding Conf 2025 Starts Here!
						</p>
						<p className="text-lg font-semibold text-slate-400">
							Secure your spot at next year's biggest coding conference.
						</p>
					</div>
				)}
				{submit && (
					<div className="max-w-xl mx-auto space-y-3 text-center text-white sm:max-w-lg lg:max-w-2xl">
						<p className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">
							Congrats, <span className="text-orange-300">{fullName}!</span>
						</p>
						<p className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">
							Your ticket is ready.
						</p>
						<p className="text-sm font-semibold sm:text-lg text-slate-400">
							We've emailed your ticket to{" "}
							<span className="text-orange-300">{email}</span> and will send
							updates in the run up to the event.
						</p>
					</div>
				)}
			</div>
			{!submit && <Input />}
			{submit && <Success />}
		</div>
	);
}

export default App;
