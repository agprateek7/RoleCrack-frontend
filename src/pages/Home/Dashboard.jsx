import React, { useEffect, useState } from 'react'
import { LuPlus } from "react-icons/lu";
import { CARD_BG } from "../../utils/data"
import toast from "react-hot-toast"
import DashboardLayout from '../../components/layouts/DashboardLayout';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../utils/axiosInstance';
import { API_PATHS } from '../../utils/apiPaths';
import SummaryCard from '../../components/Cards/SummaryCard';
import moment from 'moment';
import CreateSessionForm from './CreateSessionForm';
import Modal from '../../components/Modal';
import DeleteAlertContent from '../../components/DeleteAlertContent';

const Dashboard = () => {
  const navigate = useNavigate();

  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [sessions, setSessions] = useState([]);

  const [openDeleteAlert, setOpenDeleteAlert] = useState({
    open: false,
    data: null
  })

  const fetchAllSessions = async() => {
    try {
      const response = await axiosInstance.get(API_PATHS.SESSION.GET_ALL);
      setSessions(response.data);
    } catch (error) {
      console.error('Error fetching session data:', error);
    }
  }

  const deleteSession = async (sessionData) => {
    try {
      await axiosInstance.delete(API_PATHS.SESSION.DELETE(sessionData?._id));

      toast.success("Session deleted successfully");
      setOpenDeleteAlert({
        open: false,
        data: null,
      });
      fetchAllSessions();
    } catch (error) {
      console.error("Error deleting session data:", error);
    }
  };

  useEffect(() => {
    fetchAllSessions();
  }, []);

  return (
  <DashboardLayout>
    <div className="min-h-screen bg-[#0f172a] text-white px-4 md:px-8 py-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-white">Your Sessions</h2>
        {/* <button
          className="flex items-center gap-2 bg-blue-700 hover:bg-blue-600 text-white font-semibold px-5 py-2.5 rounded-full shadow-md transition"
          onClick={() => setOpenCreateModal(true)}
        >
          <LuPlus className="text-xl" />
          Add New
        </button> */}
      </div>

      {sessions?.length === 0 ? (
        <p className="text-gray-400 text-sm">No sessions found. Click "+" to create one.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sessions.map((data, index) => (
            <SummaryCard
              key={data?._id}
              colors={CARD_BG[index % CARD_BG.length]}
              role={data?.role || ""}
              topicsToFocus={data?.topicsToFocus || ""}
              experience={data?.experience || "-"}
              questions={data?.questions?.length || "-"}
              description={data?.description || ""}
              lastUpdated={
                data?.updatedAt
                  ? moment(data.updatedAt).locale("en").format("LL")
                  : ""
              }
              onSelect={() => navigate(`/interview-prep/${data?._id}`)}
              onDelete={() => setOpenDeleteAlert({ open: true, data })}
            />
          ))}
        </div>
      )}

      {/* Floating Action Button */}
      <button
        className="fixed bottom-8 right-8 md:bottom-14 md:right-14 w-14 h-14 flex items-center justify-center bg-blue-700 hover:bg-blue-600 text-white rounded-full shadow-lg transition transform hover:scale-105"
        onClick={() => setOpenCreateModal(true)}
      >
        <LuPlus className="text-2xl" />
      </button>

      {/* Modals */}
      <Modal
        isOpen={openCreateModal}
        onClose={() => setOpenCreateModal(false)}
        hideHeader
      >
        <CreateSessionForm />
      </Modal>

      <Modal
        isOpen={openDeleteAlert?.open}
        onClose={() => setOpenDeleteAlert({ open: false, data: null })}
        title="Delete Alert"
      >
        <div className="w-full md:w-[30vw]">
          <DeleteAlertContent
            content="Are you sure you want to delete this session details?"
            onDelete={() => deleteSession(openDeleteAlert.data)}
          />
        </div>
      </Modal>
    </div>
  </DashboardLayout>
);
}

export default Dashboard