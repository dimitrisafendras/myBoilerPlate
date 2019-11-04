import { SHOW_ALL } from './actions/actionTypes';

export const initialState = {
  todos: [
    { id: 0, text: 'asdlkjhasdfiuhasdf', completed: false },
    { id: 1, text: 'fjhgf', completed: false },
    { id: 2, text: 'asdlkjhahgfchgsdfiuhasdf', completed: false },
    { id: 3, text: 'hgfcytrh', completed: false },
    { id: 4, text: 'asdlkjhahgfcsdfiuhasdf', completed: false },
    {
      id: 5,
      text: 'asdlkjhasdhtfcdhtrchtyrchytyrchtrdfiuhasdf',
      completed: false,
    },
    { id: 6, text: 'asdlkjhasdfiuhasdf', completed: false },
    { id: 7, text: 'asdlkjhhgtfchgfchtrcasdfiuhasdf', completed: false },
    { id: 8, text: 'asdlkjhasdfihgfduhasdf', completed: false },
    { id: 9, text: 'asdlkjhasdfihgfdhgdfhgdfhgfduhasdf', completed: false },
    { id: 10, text: 'asdlkjhasdfiuhasdf', completed: false },
  ],
  visibility: SHOW_ALL,
};
