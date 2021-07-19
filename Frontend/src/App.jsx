import React from 'react';
import styled from 'styled-components';

const ContainerTest = styled.div`
	/* padding: 20rem; */
	border: 1px solid red;
`;

export default function App() {
	return (
		<ContainerTest className="p-[100px] border-2 border-midPink text-lightblue">
			<h1>tes</h1>
			<button className="btn-primary">clickme</button>
		</ContainerTest>
	);
}
