import Request from '../request'
import useDashBoard from '@/stores/dashboard/dashBoard.js'
const dashBoard = useDashBoard()

// 查询公告通知提醒列表
export const queryAnnouncement = async (
  success = () => {},
  fail = () => {}
) => {
  Request.requestForm(
    Request.GET,
    '/sysindex/system-message-remind/query-announcement-notices'
  )
    .then((response) => {
      dashBoard.setAnnouncement(response.data)
      success(response)
    })
    .catch((error) => fail(error))
}
