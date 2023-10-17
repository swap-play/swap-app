import React from 'react';
import { View, StyleSheet } from 'react-native';

interface BreadcrumbsProps {
  steps: number;
  activeLine: number;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ steps, activeLine }) => {
  const renderLines = () => {
    const lines = [];
    for (let i = 0; i < steps; i++) {
      const lineStyle = {
        ...styles.line,
        backgroundColor: activeLine === i ? '#8B5FD9' : '#D7D7D7',
      };
      lines.push(<View key={i} style={lineStyle} />);
    }
    return lines;
  };

  return <View style={styles.container}>{renderLines()}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '35%',
    marginTop: 30,
  },
  line: {
    flex: 1,
    height: 4,
    marginHorizontal: 5,
  },
});

export default Breadcrumbs;
