import { Avatar } from '@material-ui/core';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	align-items: center;
	cursor: pointer;
	padding: 15px;
	word-break: break-word;
	outline: 1px solid #e9eaeb;
	margin: 2px 0 0 0;
	:hover {
		background-color: #e9eaeb;
	}
`;

const UserAvatar = styled(Avatar)`
	margin: 5px;
	margin-right: 15px;
`;

export { Container, UserAvatar };
