import mongoose from 'mongoose';

const LeadSchema = new mongoose.Schema({
  leadId: {
    type: String,
    trim: true,
    index: true,
  },
  leadNumber: {
    type: Number,
    index: true,
  },
  name: {
    type: String,
    trim: true,
    required: true,
  },
  phone: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    lowercase: true,
    trim: true,
    default: '',
  },
  service: {
    type: String,
    trim: true,
    default: 'Mutual Funds',
  },
  source: {
    type: String,
    trim: true,
    default: 'Website',
  },
  stage: {
    type: String,
    trim: true,
    default: 'New',
  },
  response: {
    type: String,
    trim: true,
    default: 'Pending',
  },
  callStatus: {
    type: String,
    trim: true,
    default: 'Pending',
  },
  sipAmount: {
    type: Number,
    default: 0,
  },
  investmentAmount: {
    type: Number,
    default: 0,
  },
  tenureYears: {
    type: Number,
    default: null,
  },
  remarks: {
    type: String,
    default: '',
  },
  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    default: null,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    default: null,
  }
}, {
  timestamps: true,
});

export default mongoose.models.Lead || mongoose.model('Lead', LeadSchema);
