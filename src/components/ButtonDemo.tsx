import React from "react";
import { Button } from "antd";
const { Group: ButtonGroup } = Button;

const ButtonDemo: React.FC = props => (
	<>
		<ButtonGroup>
			<Button>Cancel</Button>
			<Button>OK</Button>
		</ButtonGroup>
	</>
);
export default ButtonDemo