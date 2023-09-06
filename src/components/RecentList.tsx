import * as S from '../styles/SearchList.styled';

interface Props {
	list?: string[];
}

const RecentList = ({list}: Props) => {
	return (
		<>
			<S.Container>
				<S.Subtitle>최근 검색어</S.Subtitle>
				{list ? (
					list.map((item, index) => <span key={`recent_${index}`}>{item}</span>)
				) : (
					<S.emptyText>최근 검색어가 없습니다</S.emptyText>
				)}
			</S.Container>
		</>
	);
};

export default RecentList;
