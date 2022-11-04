export type postDataType = {
	articleType: string;
	publishDate: string | Date;
	likesCount: number;
	comments: string[];
	title: string;
	shortDescription: string;
	articleDetails: articleDetailsType;
	postTime: string;
	postBy: string;
	postByDetails: postByUserType;
};
export type articleDetailsType = {
	title: string;
	banner: string;
	images: string[];
	video: string;
	moreVideos: string[];
	description: string;
};

export type postByUserType = {
	fullName: string;
	firstName: string;
	lastName: string;
	profileUrl: string;
	avatarUrl: string;
};
