import React from 'react';
// HARUS MENGIRIMKAN JUSTIFY? ITEMS?
const Sections = ({ children, propsClass, propsClass2 }) => {
	return (
		<div>
			<div className={`flex px-30 xs:px-4 sm:px-10 md:px-10 lg:px-10 min-h-screen ${propsClass}`}>
				<div className={`${propsClass2} max-w-containerMax`}>{children}</div>
			</div>
		</div>
	);
};

export default Sections;
