import { transformToNestObject } from "react-hook-form";

const parseErrorSchema = (error, validateAllFieldCriteria) => {
  return Array.isArray(error.inner) && error.inner.length
    ? error.inner.reduce((previous, { path, message, type }) => {
        const previousTypes = (previous[path] && previous[path].types) || {};
        const key = path || type;
        return Object.assign(
          Object.assign({}, previous),
          key
            ? {
                [key]: Object.assign(
                  Object.assign(
                    {},
                    previous[key] || {
                      message,
                      type,
                    }
                  ),
                  validateAllFieldCriteria
                    ? {
                        types: Object.assign(Object.assign({}, previousTypes), {
                          // @ts-expect-error
                          [type]: previousTypes[type]
                            ? // @ts-expect-error
                              [...[].concat(previousTypes[type]), message]
                            : message,
                        }),
                      }
                    : {}
                ),
              }
            : {}
        );
      }, {})
    : {
        [error.path]: { message: error.message, type: error.type },
      };
};
export const yupResolver = (schema) => async (
  values,
  context,
  validateAllFieldCriteria = false
) => {
  try {
    return {
      values: await schema.validate(values, Object.assign({}, { context })),
      errors: {},
    };
  } catch (e) {
    const parsedErrors = parseErrorSchema(e, validateAllFieldCriteria);
    return {
      values: {},
      errors: transformToNestObject(parsedErrors),
    };
  }
};
