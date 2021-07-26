import React from 'react';
// HARUS MENGIRIMKAN JUSTIFY? ITEMS?
const Sections = ({ children, propsClass, propsClass2 }) => {
	return (
		<div>
			<div className={`flex px-20 xs:px-3 sm:px-10 md:px-15 min-h-screen  ${propsClass}`}>
				<div className={`${propsClass2} `}>{children}</div>
			</div>
		</div>
	);
};

export default Sections;
