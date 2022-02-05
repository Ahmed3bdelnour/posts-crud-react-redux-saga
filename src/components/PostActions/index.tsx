import { useCallback } from "react";
import { EditFilled, DeleteFilled, EyeFilled } from "@ant-design/icons";
import { Modal, notification, Space } from "antd";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PostDetails } from "../PostDetails";
import { postDeleteStart } from "../../store/actions/posts";
import { Post } from "../../models/posts";

type Props = {
  post: Post;
};

export const PostActions = ({ post }: Props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOpenViewModal = useCallback(() => {
    Modal.info({
      title: "Post details",
      content: <PostDetails post={post} />,
    });
  }, [post]);

  const handleNavigateToEditPage = useCallback(
    () => navigate(`/posts/${post.key}/edit`),
    [post.key, navigate]
  );

  const handleOpenDeleteModal = useCallback(() => {
    Modal.confirm({
      title: "Do you want to delete this post?",
      content: "When clicked the OK button, this post will be deleted.",
      onOk() {
        return new Promise((resolve, reject) => {
          dispatch(
            postDeleteStart(
              post.key!,
              () => {
                resolve(0);
                notification.success({
                  message: "Post deleted successfully",
                });
              },
              () => {
                reject();
                notification.error({
                  message: "Error happened, Please try again later.",
                });
              }
            )
          );
        });
      },
    });
  }, [post.key, dispatch]);

  return (
    <Space>
      <EyeFilled onClick={handleOpenViewModal} />
      <EditFilled onClick={handleNavigateToEditPage} />
      <DeleteFilled onClick={handleOpenDeleteModal} />
    </Space>
  );
};
