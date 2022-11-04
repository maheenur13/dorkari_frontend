export interface INewsType {
	data: {
		status: string;
		totalResults: number;
		articles: {
			author: string;
			content: string;
			description: string;
			publishedAt: string;
			source: {
				id: string | null;
				name: string;
			};
			title: string;
			url: string;
			urlToImage: string;
		}[];
	};
}
