import { Table } from "antd";
import { TableRowSelection } from "antd/lib/table/interface";
import { memo, useMemo } from "react";
import { Post } from "../../models/posts";
import { PostActions } from "../PostActions";

type Props = {
  posts: Post[];
};

const MemoizedPostActions = memo(PostActions);

const rowSelection: TableRowSelection<Post> = {
  type: "checkbox",
};
const columns = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    sorter: (a: Post, b: Post) => a.title.localeCompare(b.title),
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
    sorter: (a: Post, b: Post) => a.description.localeCompare(b.description),
  },
  {
    title: "Action",
    key: "action",
    render: (post: Post) => <MemoizedPostActions post={post} />,
  },
];
const pageSizeOptions: number[] = [5, 10, 20, 50, 100];
const showTotal = (total: number, range: number[]) =>
  `Showing posts ${range[0]} to ${range[1]} of ${total}`;

export const PostsTable = ({ posts }: Props) => {
  const pagination = useMemo(
    () => ({
      pageSizeOptions,
      defaultPageSize: 5,
      total: posts ? posts.length : 0,
      showTotal,
    }),
    [posts]
  );

  return (
    <Table
      rowSelection={rowSelection}
      dataSource={posts}
      columns={columns}
      pagination={pagination}
    />
  );
};
