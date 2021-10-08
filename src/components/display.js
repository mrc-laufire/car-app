import { React } from 'react';
import Cars from './cars';

const display = (context) =>
	<div role="display">
		{ Cars(context) }
	</div>;

export default display;
