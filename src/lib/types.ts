export interface Project {
  _id: string;
  title: string;
  description: string;
  image: {
    publicId: string;
    url: string;
  };
  video: {
    publicId: string;
    url: string;
  };
  link: string;
}
