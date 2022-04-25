TweenMax.from('.logo', 1.6, {
	delay: 0.2,
	opacity: 0,
	y: 20,
	ease: Expo.easeInOut,
});
TweenMax.from('.search', 1.6, {
	delay: 0.4,
	opacity: 0,
	y: 20,
	ease: Expo.easeInOut,
});
TweenMax.from('.logo-icon', 1.6, {
	delay: 0,
	opacity: 0,
	y: 20,
	ease: Expo.easeInOut,
});
TweenMax.staggerFrom(
	'.text-one',
	2,
	{
		delay: 2.6,
		opacity: 0,
		y: 40,
		ease: Expo.easeInOut,
	},
	0.2
);
TweenMax.staggerFrom(
	'.text-two',
	1.5,
	{
		delay: 3.4,
		opacity: 0,
		y: -40,
		ease: Expo.easeInOut,
	},
	0.2
);
TweenMax.staggerFrom(
	'.text-two label',
	1,
	{
		delay: 4,
		opacity: 0,
		y: -40,
		ease: Expo.easeInOut,
	},
	0.2
);
TweenMax.staggerFrom(
	'h2',
	2,
	{
		delay: 4,
		opacity: 0,
		x: -60,
		ease: Expo.easeInOut,
	},
	0.2
);
TweenMax.staggerFrom(
	'.text-three',
	2,
	{
		delay: 4.7,
		opacity: 0,
		y: 40,
		ease: Expo.easeInOut,
	},
	0.2
);
TweenMax.from(
	'button',
	2,
	{
		delay: 5.5,
		opacity: 0,
		y: -30,
		ease: Expo.easeInOut,
	},
	0.2
);
TweenMax.from('.line', 2, {
	delay: 5,
	opacity: 0,
	x: -100,
	ease: Expo.easeInOut,
});

TweenMax.from(
	'.tag',
	2,
	{
		delay: 5.3,
		opacity: 0,
		x: -100,
		ease: Expo.easeInOut,
	},
	0.2
);
TweenMax.staggerFrom(
	'.media ul li',
	2,
	{
		delay: 6,
		opacity: 0,
		y: -40,
		ease: Expo.easeInOut,
	},
	0.2
);
TweenMax.staggerFrom(
	'.left-right ul li',
	2,
	{
		delay: 6.4,
		opacity: 0,
		y: -40,
		ease: Expo.easeInOut,
	},
	0.2
);
