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
	const completedKeyword = keyword.replace(/[ㄱ-ㅎ]|[ㅏ-ㅣ]/gi, '');

	return (
		<>
			<S.Container>
				<S.Subtitle>추천 검색어</S.Subtitle>
				{list && list.length > 0 ? (
					<ul>
						{list.map(({sickCd, sickNm}, index) => {
							const match = sickNm.match(new RegExp(completedKeyword, 'i'));
							const idx = match && match.index ? match.index : 0;
							const forwardName = sickNm.slice(0, idx);
							const backwardName = sickNm.slice(idx + completedKeyword.length);
							// console.info(index, index === targetIndex);
							return (
								<li key={`recommend_${sickCd}_${index}`}>
									<SearchItem selected={index === targetIndex}>
										{forwardName}
										<span>{match}</span>
										{backwardName}
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
