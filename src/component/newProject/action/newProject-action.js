export const SET_NAME_CLIENT = 'SET_NAME_CLIENT';
export const SET_NAME_PROJECT = 'SET_NAME_PROJECT';
export const SET_DESC_PROJECT = 'SET_DESC_PROJECT';

export function setNameClient(param) {
  let name = !!param.currentTarget.innerHTML ? param.currentTarget.innerHTML : param.currentTarget.value;
  return {
    type: SET_NAME_CLIENT,
    name
  };
};

export function setNameProject(param) {
  let nameProject = param.currentTarget.value;
  return {
    type: SET_NAME_PROJECT,
    nameProject
  };
}

export function setDescriptionProject(param) {
  let name = param.currentTarget.value;
  return {
    type: SET_DESC_PROJECT,
    name
  };
}
