import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { Table, TBody, TCell, TFooter, THeader, TRow, TableContainer } from './index';

const stories = storiesOf('Storybook Table', module);
stories.addDecorator(withKnobs);

const data = [
  {
    name: 'Leanne Graham',
    email: 'Sincere@april.biz',
    age: 28,
    status: 'Active'
  },
  {
    name: 'Ervin Howell',
    email: 'Shanna@melissa.tv',
    age: 35,
    status: 'Active'
  },
  {
    name: 'Clementine Bauch',
    email: 'Nathan@yesenia.net',
    age: 33,
    status: 'Inactive'
  },
  {
    name: 'Patricia Lebsack',
    email: 'Julianne@kory.org',
    age: 25,
    status: 'Active'
  },
  {
    name: 'Kamren',
    email: 'Hettinger@annie.ca',
    age: 42,
    status: 'Active'
  },
  {
    name: 'Dennis Schulist',
    email: 'Dach@jasper.info',
    age: 34,
    status: 'Inactive'
  },
  {
    name: 'Kurtis Weissnat',
    email: 'Hoeger@billy.biz',
    age: 44,
    status: 'Active'
  },
  {
    name: 'Maxime_Nienow',
    email: 'Sherwood@rosamond.me',
    age: 26,
    status: 'Active'
  },
  {
    name: 'Glenna Reichert',
    email: 'McDermott@dana.io',
    age: 30,
    status: 'Inactive'
  }
];

const columns = [
  {
    Header: 'Name',
    accessor: 'name'
  },
  {
    Header: 'Email',
    accessor: 'email'
  },
  {
    Header: 'Age',
    accessor: 'age'
  },
  {
    Header: 'Status',
    accessor: 'status'
  }
];

stories.add('Простая таблица', () => {
  return (
    <TableContainer bordered={boolean('bordered', false)} fullWidth={boolean('fullWidth', false)}>
      <Table>
        <THeader>
          <TRow>
            {columns.map((column) => (
              <TCell>{column.Header}</TCell>
            ))}
          </TRow>
        </THeader>
        <TBody>
          {data.map((item) => (
            <TRow>
              <TCell>{item.name}</TCell>
              <TCell>{item.email}</TCell>
              <TCell>{item.age}</TCell>
              <TCell>{item.status}</TCell>
            </TRow>
          ))}
        </TBody>
        <TFooter>
          <TRow>
            {columns.map((column) => (
              <TCell>{column.accessor}</TCell>
            ))}
          </TRow>
        </TFooter>
      </Table>
    </TableContainer>
  );
});
