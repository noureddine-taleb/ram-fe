export function IconBell({ className, notificationAvailable }: { className?: string, notificationAvailable: boolean }) {
	return (
		<svg className={className} viewBox="0 0 27 30" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M20.9919 13.8388L21.4918 13.8504L21.4918 13.8502L20.9919 13.8388ZM21.0612 11.0376L21.5608 11.0618L21.5611 11.0482L21.0612 11.0376ZM12.9952 2.6021L12.984 3.10197L12.9841 3.10197L12.9952 2.6021ZM4.56193 10.6626L4.062 10.6513L4.06194 10.6586L4.56193 10.6626ZM4.50364 13.4682L4.00376 13.4568L4.00376 13.4572L4.50364 13.4682ZM1.46378 21.3526L1.82146 21.702L1.82164 21.7018L1.46378 21.3526ZM2.61197 24.1506L2.62328 23.6507L2.62274 23.6507L2.61197 24.1506ZM22.3963 24.5982L22.385 25.098L22.3857 25.0981L22.3963 24.5982ZM16.431 26.4426L16.9102 26.5852L17.0971 25.9574L16.4422 25.9427L16.431 26.4426ZM8.83577 26.2721L8.84698 25.7722L8.18869 25.7575L8.35124 26.3955L8.83577 26.2721ZM24.0442 21.5214C23.5443 20.9609 22.9014 20.3324 22.3751 19.2036C21.8501 18.0778 21.4321 16.4251 21.4918 13.8504L20.492 13.8272C20.4296 16.5228 20.8662 18.3339 21.4688 19.6262C22.07 20.9157 22.8277 21.6597 23.2979 22.187L24.0442 21.5214ZM21.4918 13.8502C21.4934 13.7785 21.5091 13.1126 21.5252 12.4474C21.5332 12.1148 21.5413 11.7827 21.5479 11.5252C21.5511 11.3965 21.554 11.2867 21.5563 11.2049C21.5574 11.164 21.5583 11.1305 21.5591 11.1053C21.5595 11.0927 21.5598 11.0825 21.5601 11.0746C21.5602 11.0707 21.5604 11.0677 21.5604 11.0653C21.5605 11.0641 21.5605 11.0632 21.5606 11.0626C21.5606 11.0619 21.5606 11.0617 21.5606 11.0618L20.5618 11.0134C20.5548 11.1582 20.4952 13.6901 20.492 13.8273L21.4918 13.8502ZM21.5611 11.0482C21.6637 6.21552 17.8384 2.20955 13.0063 2.10222L12.9841 3.10197C17.2628 3.19701 20.6522 6.74449 20.5613 11.027L21.5611 11.0482ZM13.0064 2.10222C8.17518 1.99375 4.17054 5.81968 4.06205 10.6513L5.0618 10.6738C5.15788 6.39467 8.70448 3.00588 12.984 3.10197L13.0064 2.10222ZM4.06194 10.6586C4.06088 10.7924 4.00713 13.3088 4.00377 13.4568L5.00351 13.4795C5.00674 13.3372 5.06077 10.8099 5.06191 10.6665L4.06194 10.6586ZM4.00376 13.4572C3.94734 16.033 3.45485 17.6643 2.87928 18.7644C2.30214 19.8675 1.63122 20.4651 1.10592 21.0035L1.82164 21.7018C2.31476 21.1965 3.10602 20.4881 3.76533 19.228C4.42622 17.9648 4.94445 16.1758 5.00352 13.4791L4.00376 13.4572ZM1.1061 21.0033C-0.154302 22.2936 0.6575 24.6086 2.60121 24.6504L2.62274 23.6507C1.60358 23.6287 1.13741 22.4023 1.82146 21.702L1.1061 21.0033ZM2.60066 24.6504L22.385 25.098L22.4077 24.0983L2.62328 23.6507L2.60066 24.6504ZM22.3857 25.0981C23.2745 25.1169 24.0111 24.5872 24.3633 23.8873C24.7221 23.1744 24.6962 22.2575 24.0453 21.5227L23.2967 22.1857C23.6511 22.5858 23.6626 23.0552 23.4701 23.4377C23.271 23.8332 22.8676 24.108 22.4069 24.0983L22.3857 25.0981ZM12.5579 29.7657C14.6082 29.8091 16.3521 28.4602 16.9102 26.5852L15.9518 26.2999C15.5179 27.7573 14.1648 28.7995 12.5791 28.7659L12.5579 29.7657ZM16.4422 25.9427L8.84698 25.7722L8.82455 26.772L16.4198 26.9424L16.4422 25.9427ZM8.35124 26.3955C8.83183 28.2821 10.5065 29.7172 12.5567 29.7656L12.5803 28.7659C10.999 28.7285 9.69534 27.6209 9.32029 26.1487L8.35124 26.3955Z" fill="currentColor" />
			{ notificationAvailable && <circle cx="21.5" cy="5.5" r="5" fill="#2FE6C8" stroke="white" />}
		</svg>
	);
}