import { AlertCircle, CheckCircle, Info, X } from 'lucide-react';

interface NoticeProps {
  type: 'error' | 'success' | 'info';
  title?: string;
  message: string;
  onDismiss?: () => void;
  className?: string;
}

export const Notice = ({ type, title, message, onDismiss, className = '' }: NoticeProps) => {
  const getStyles = () => {
    switch (type) {
      case 'error':
        return 'bg-destructive/10 border-destructive/20 text-destructive';
      case 'success':
        return 'bg-green-50 border-green-200 text-green-800';
      case 'info':
        return 'bg-blue-50 border-blue-200 text-blue-800';
      default:
        return 'bg-muted border-border text-foreground';
    }
  };

  const getIcon = () => {
    switch (type) {
      case 'error':
        return <AlertCircle className="h-5 w-5 flex-shrink-0" />;
      case 'success':
        return <CheckCircle className="h-5 w-5 flex-shrink-0" />;
      case 'info':
        return <Info className="h-5 w-5 flex-shrink-0" />;
      default:
        return null;
    }
  };

  return (
    <div className={`flex items-start space-x-3 p-4 border rounded-xl ${getStyles()} ${className}`}>
      {getIcon()}
      <div className="flex-1 min-w-0">
        {title && (
          <h4 className="text-sm font-medium mb-1">
            {title}
          </h4>
        )}
        <p className="text-sm">
          {message}
        </p>
      </div>
      {onDismiss && (
        <button
          onClick={onDismiss}
          className="flex-shrink-0 p-1 hover:bg-black/10 rounded transition-colors"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );
};