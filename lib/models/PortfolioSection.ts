import mongoose from 'mongoose';

export interface IPortfolioSection extends mongoose.Document {
  sectionName: string;
  title: string;
  content: any;
  lastUpdated: Date;
}

const portfolioSectionSchema = new mongoose.Schema<IPortfolioSection>({
  sectionName: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  content: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
  lastUpdated: {
    type: Date,
    default: Date.now,
  },
}, {
  timestamps: true,
});

export default mongoose.models.PortfolioSection || mongoose.model<IPortfolioSection>('PortfolioSection', portfolioSectionSchema);
