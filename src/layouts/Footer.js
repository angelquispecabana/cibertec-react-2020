const Footer = () => {
	const date = new Date();

	return (
		<footer className="footer">
			<div className="content has-text-centered">
				<p className="has-text-centered">
					<strong>Admin</strong> desarrollado en ReactJS &copy; {date.getFullYear()}
				</p>
			</div>
		</footer>
	);
};

export default Footer;