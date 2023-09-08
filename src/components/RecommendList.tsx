import {memo} from 'react';
import * as S from '../styles/SearchList.styled';
import {sick} from '../types/sick';
import SearchItem from './SearchItem';

interface Props {
	list?: sick[];
	keyword: string;
	targetIndex: number;
}

const RecommendList = memo(({list, keyword, targetIndex}: Props) => {
	const keywordRegexp = new RegExp(keyword, 'i');
	return (
		<>
			<S.Container>
				<S.Subtitle>추천 검색어</S.Subtitle>
				{list && list.length > 0 ? (
					<ul>
						{list.map(({sickCd, sickNm}, index) => {
							const splitedName = sickNm.split(keywordRegexp);
							const machedChar = sickNm.match(keywordRegexp);

							return (
								<li key={`recommend_${sickCd}_${index}`}>
									<SearchItem selected={index === targetIndex}>
										{splitedName[0]}
										<strong>{machedChar}</strong>
										{splitedName[1]}
									</SearchItem>
								</li>
							);
						})}
					</ul>
				) : (
					<S.emptyText>추천 검색어가 없습니다</S.emptyText>
				)}
			</S.Container>
		</>
	);
});

export default RecommendList;
