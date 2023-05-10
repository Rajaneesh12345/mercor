import styled from 'styled-components';

const Container = styled.div`
	border-left: 3px solid whitesmoke;
	background: radial-gradient(circle at right, #ffa949, firebrick);
`;

const Header = styled.div`
	position: sticky;
	background-color: white;
	z-index: 100;
	top: 0;
	display: flex;
	padding: 11px;
	height: 80px;
	align-items: center;
	border-bottom: 1px solid whitesmoke;
`;

const HeaderInfo = styled.div`
	margin-left: 15px;
	flex: 1;

	> h3 {
		margin-bottom: 3px;
	}

	> p {
		font-size: 14px;
		color: gray;
	}
`;

const HeaderIcons = styled.div``;

const MessageContainer = styled.div`
	padding: 30px;
	min-height: 90vh;
`;
// background: linear-gradient(to right, #bdc3c7, #2c3e50);

const EndOfMessage = styled.div`
	margin-bottom: 50px;
`;

const InputContainer = styled.form`
	display: flex;
	align-items: center;
	padding: 10px;
	position: sticky;
	bottom: 0;
	z-index: 100;
`;
// background: linear-gradient(to right, #bdc3c7, #2c3e50);

const Input = styled.input`
	flex: 1;
	outline: 0;
	border: none;
	border-radius: 10px;
	background-color: whitesmoke;
	padding: 10px 20px;
	margin-left: 15px;
	margin-right: 15px;
`;

export {
	Container,
	Header,
	HeaderInfo,
	HeaderIcons,
	MessageContainer,
	EndOfMessage,
	InputContainer,
	Input,
};
