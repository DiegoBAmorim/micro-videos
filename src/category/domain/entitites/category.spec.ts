import { Category } from './category';

import { omit } from 'lodash';

describe('Category Unit Tests', () => {
  test('constructor of category', () => {
    let category = new Category({
      name: 'Movie',
    });

    let props = omit(category.props, 'created_at');

    expect(props).toStrictEqual({
      name: 'Movie',
      description: null,
      is_active: true,
    });

    expect(category.props.created_at).toBeInstanceOf(Date);

    category = new Category({
      name: 'Movie',
      description: 'some description',
    });

    expect(category.props).toMatchObject({
      name: 'Movie',
      description: 'some description',
    });

    category = new Category({
      name: 'Movie',
      is_active: true,
    });

    expect(category.props).toMatchObject({
      name: 'Movie',
      is_active: true,
    });

    let created_at = new Date();

    category = new Category({
      name: 'Movie',
      created_at,
    });

    expect(category.props).toMatchObject({
      name: 'Movie',
      created_at,
    });
  });

  test('getter of name field', () => {
    const category = new Category({ name: 'Movie' });

    expect(category.name).toBe('Movie');
  });

  test('getter and setter of description field', () => {
    let category = new Category({
      name: 'Movie',
    });

    expect(category.description).toBeNull();

    category = new Category({
      name: 'Movie',
      description: 'some description',
    });

    expect(category.description).toBe('some description');

    category = new Category({
      name: 'Movie',
    });

    category['description'] = 'other description';
    expect(category.description).toBe('other description');

    category['description'] = undefined;
    expect(category.description).toBeNull();

    category['description'] = null;
    expect(category.description).toBeNull();
  });

  test('getter and setter of is_active prop', () => {
    let category = new Category({
      name: 'Movie',
    });

    expect(category.is_active).toBeTruthy();

    category = new Category({
      name: 'Movie',
      is_active: true,
    });

    expect(category.is_active).toBeTruthy();

    category = new Category({
      name: 'Movie',
      is_active: false,
    });
    expect(category.is_active).toBeFalsy();
  });

  test('getter of created_at prop', () => {
    let category = new Category({
      name: 'Movie',
    });

    expect(category.created_at).toBeInstanceOf(Date);

    let created_at = new Date();
    category = new Category({
      name: 'Movie',
      created_at,
    });

    expect(category.created_at).toBe(created_at);
  });
});
