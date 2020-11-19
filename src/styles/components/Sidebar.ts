import styled from "styled-components";

interface ContainerProps
{
	isClicked: boolean
}

const Container = styled.div<ContainerProps>`
  background-color: ${props => props.theme.colors.primary};
  height: 100vh;
  width: ${props => props.isClicked ? '35rem' : '5rem'};

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;

	padding-top: 2rem;
	padding-bottom: 2rem;
	${p => p.isClicked ? 'padding: 2rem' : ''};

	cursor: pointer;
	transition: 0.25s;

	img
	{
		background-color: #fff;
		border-radius: 100%;
		padding: 5px;

		width: ${props => props.isClicked ? '30rem' : '4rem'};
		height: ${props => props.isClicked ? '30rem' : '4rem'};

		transition: 0.25s;

		:hover
		{
			transform: ${props => props.isClicked ? 'scale(1.05)' : 'scale(1.1)'};
		}
	}

	footer
	{

		background-color: #fff;
		border-radius: 2rem;

		display: flex;
		align-items: center;
		justify-content: flex-start;

		padding-right: 1rem;
		padding-left: 1rem;
		gap: 0.5rem;

		height: 4rem;
		width: ${p => p.isClicked ? '80%' : '4rem'};

		transition: 0.25s;

		:hover
		{
			transform: scale(1.1);
		}

		input
		{
			width: 100%;
			height: 75%;

			outline: none;
			border: none;
		}
	}

	@media (max-width: 1100px)
	{
		height: 5rem;
		width: 100vw;

		flex-direction: row;
		padding-left: 2rem;
		padding-right: 2rem;

		img
		{
			width: 4rem;
			height: 4rem;
		}

		footer
		{
			width: 4rem;
		}
	}
`

export default Container