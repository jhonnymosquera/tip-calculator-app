function Picture({ img, className }) {
	return (
		<picture className={className}>
			<source srcSet={img.avif} type="image/avif" />
			<source srcSet={img.webp} type="image/webp" />
			<img srcSet={`${img.png || img.jpg}`} alt={img.alt} />
		</picture>
	);
}

export default Picture;
