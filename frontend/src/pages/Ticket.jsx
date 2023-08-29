import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { getTicket, closeTicket } from '../features/ticketSlice';
import { getNotes, reset as notesReset } from '../features/noteSlice';

// Components
import Header from '../components/Header';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import NoteItem from '../components/NoteItem';

function Ticket() {
  const { ticket, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.tickets
  );

  const { notes, isLoading: notesIsLoading } = useSelector(
    (state) => state.notes
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const { ticketId } = useParams();

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    dispatch(getTicket(ticketId));
    dispatch(getNotes(ticketId));
    // eslint-disabled-next-line
  }, [isError, message, ticketId]);

  // Close ticket
  const onTicketClose = () => {
    dispatch(closeTicket(ticketId));
    toast.success('Ticket Closed');
    navigate('/tickets');
  };

  if (isLoading || notesIsLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h3>Somethings Went Wrong</h3>;
  }

  return (
    <div className="container">
      <Header />
      <div className="ticket-page">
        <header className="ticket-header">
          <BackButton url="/tickets" />
          <h2>
            Ticket ID: {ticket._id}
            <span className={`status status-${ticket.status}`}>
              {ticket.status}
            </span>
          </h2>
          <h3>
            Date Submitted: {new Date(ticket.createdAt).toLocaleString('en-US')}
          </h3>
          <h3>Product: {ticket.product}</h3>
          <hr />
          <div className="ticket-desc">
            <h3>Description of Issue</h3>
            <p>{ticket.description}</p>
          </div>
          <h2>Notes</h2>
        </header>

        {notes.map((note) => (
          <NoteItem key={note._id} note={note} />
        ))}

        {ticket.status !== 'closed' && (
          <button onClick={onTicketClose} className="btn btn-block btn-danger">
            Close Ticket
          </button>
        )}
      </div>
    </div>
  );
}

export default Ticket;
